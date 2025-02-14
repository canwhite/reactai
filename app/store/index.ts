import { createStore } from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { useStore as useZustandStore } from 'zustand';
import {produce} from 'immer';

interface StoreState {
  prompt: string;
}

const store = createStore(
  () => ({
    prompt: ""
  } as StoreState)
);

//设置set prompt
const setPrompt = (prompt: string) => {
  console.log("Setting prompt to:", prompt); // Log the prompt being set
  store.setState(
    produce((state: StoreState) => {
      state.prompt = prompt; // Correctly update the prompt property
    })
  );
  console.log("Store state after update:", store.getState().prompt); // 输出更新后的状态以验证
};

// 使用 zustand 的 useStore 钩子来获取和设置 prompt
// Use prompt hook
const usePrompt = () => {
    const prompt = useZustandStore(store, (state) => state.prompt);
    console.log("--store- prompt--", prompt);
    return prompt;
  };
export { setPrompt, usePrompt };
