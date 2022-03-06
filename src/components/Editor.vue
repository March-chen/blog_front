<template>
  <div id="editor"/>
</template>

<script>
import Editor from '@toast-ui/editor'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

export default {
  name: 'Editor',
  mounted() {
    this.editor = new Editor({
      el: document.querySelector('#editor'),
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      plugins: [codeSyntaxHighlight]
    });
  },
}
</script>

<style scoped>

</style>
