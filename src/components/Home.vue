<template>
  <v-main fluid>
      <v-form>
          <v-file-input 
            label="Busque as legendas"
            prepend-icon="mdi-message-text"
            append-icon="mdi-send"
            outlined
            multiple 
            chips
            v-model="files"
            @click:append="processSubtitles">

          </v-file-input>
      </v-form>
      <div class="pills">
          <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"/>
      </div>
  </v-main>
</template>

<script>
const {ipcRenderer} = window.require('electron')
import Pill from './Pill'


export default {
    components: {Pill},
    data : function() {
        return {
            files: [],
            groupedWords : []
        }
    },
    methods: {
        processSubtitles() {
            const captionsFiles = this.files.map(
                file => ({ 
                    name:file.name,
                     path:file.path, 
                     size: file.size, 
                     lastModified: file.lastModified 
                })
            )

            ipcRenderer.send('process-subtitles', captionsFiles)

            ipcRenderer.on('process-subtitles', async (evt, CaptionsInfoToPills) => {
                this.groupedWords = CaptionsInfoToPills;
            })
        }
    }

}
</script>

<style>

.pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>