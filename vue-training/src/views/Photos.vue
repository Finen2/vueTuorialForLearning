<template>
  <div class="about">
    <md-card>
     <md-card-media>
       <img src="https://www.incimages.com/uploaded_files/image/970x450/getty_504134147_174741.jpg" alt="People">
     </md-card-media>

     <md-card-header>
       <div class="md-title">Title goes here</div>
       <div class="md-subhead">Subtitle here</div>
     </md-card-header>

     <md-card-expand>
       <md-card-actions md-alignment="space-between">
         <div>
           <md-button>Action</md-button>
         </div>

         <md-card-expand-trigger>
           <md-button>Learn more</md-button>
         </md-card-expand-trigger>
       </md-card-actions>

       <md-card-expand-content>
         <md-card-content>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
         </md-card-content>
       </md-card-expand-content>
     </md-card-expand>
   </md-card>
  </div>
</template>

<style lang="scss" scoped>
  .card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
