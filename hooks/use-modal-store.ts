import { User } from "next-auth";
import { create } from "zustand";

export type ModalType = "create-agent";

//items to send in a modal
interface ModalData {
  user?: User;
}

interface ModalStore {
  modalType: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
  logState: () => void;
}
/* Custom React hook that controls lifecycle of the modal store provider */
const useModalStore = create<ModalStore>((set, get) => ({
  modalType: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => {
    set({ isOpen: true, modalType: type, data });
    console.log("State after opening modal:", get());
  },
  onClose: () => {
    set({ isOpen: false, modalType: null });
    console.log("State after closing modal:", get());
  },
  logState: () => console.log("Current state:", get()),
}));

export default useModalStore;
