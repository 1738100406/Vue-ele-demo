<template>
  <div class="text_group">
    <!--  -->
    <div class="input_group" :class="{ 'is-invalid': error }">
      <input
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <!-- 后面的按钮 -->
      <button v-if="btnTitle" :disabled="disabled" @click="$emit('Btnclick')">
        {{ btnTitle }}
      </button>
    </div>
    <!-- 错误提醒 -->
    <div v-if="error" class="invalid-feedback">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: String,
    placeholder: String,
    error: String,
    btnTitle: String,
    disabled: Boolean,
    value: String,
  },
};
</script>

<style scoped>
.input_group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input_group input {
  height: 100%;
  width: 60%;
  outline: none;
  border: none;
}
.input_group button {
  border: none;
  outline: none;
  background: #fff;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 0px;
}
</style>
