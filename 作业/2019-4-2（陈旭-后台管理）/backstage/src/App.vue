<template>
  <studentsList :id="id"></studentsList>
  <!-- <Index></Index> -->
  <!-- <addStudent></addStudent> -->
  <!-- <editStudent></editStudent> -->
</template>

<script>
// import Layout from "./components/Layout";
import Index from "./components/pages/index";
import studentsList from "./components/pages/students/index";
import addStudent from "./components/pages/students/addStudent";
import editStudent from "./components/pages/students/edit";
export default {
  components: {
    studentsList,
    Index,
    addStudent,
    editStudent
  },
  data() {
    return {
      id: "5ca2cdad0c42e83fe0c70803"
    };
  }
};
</script>

<style>
</style>
