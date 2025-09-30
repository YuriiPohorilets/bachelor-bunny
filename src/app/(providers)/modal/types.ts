export enum ModalName {
  Order = 'order',
}

export type ModalParams = {
  name: ModalName;
  options?: Record<string, any>;
};

export interface ModalContextType {
  modalName?: ModalName;
  openModal: (params: ModalParams) => void;
  closeModal: () => void;
}
