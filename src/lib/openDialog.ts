import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";
export const openDialog = (
options: { 
    title: any; 
    content: any; 
    ok: any; 
    cancel: any;
    visible: any;
    closeOnClickOverlay: any; }) => {
  const { title, content, ok, cancel } = options;
  // 创建div
  const div = document.createElement("div");
  // 把div放到body里
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible: boolean) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel
        },
        {
          title,
          content,
        }
      );
    },
  });
  // dialog放到div里
  app.mount(div);
};