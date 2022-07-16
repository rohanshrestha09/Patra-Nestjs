import { Button, Modal, Spinner } from "flowbite-react";
import React from "react";

interface Props {
  modalToggle: boolean;
  onClose: () => void;
  loading: boolean;
  avatarImage: string[];
  avatarSelectIndex: number;
  setAvatarSelectIndex: React.Dispatch<React.SetStateAction<number>>;
  avatarSet: () => void;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalComponent: React.FC<Props> = ({
  modalToggle,
  onClose,
  loading,
  avatarImage,
  avatarSelectIndex,
  setAvatarSelectIndex,
  avatarSet,
  setModalToggle,
}) => {
  return (
    <React.Fragment>
      <Modal show={modalToggle} onClose={onClose}>
        <Modal.Header>Pick an Avatar</Modal.Header>
        <Modal.Body>
          <div className="w-full h-full flex justify-between items-center">
            {!loading ? (
              avatarImage.map((element, index) => (
                <img
                  src={`data:image/svg+xml;base64,${element}`}
                  alt="avatar"
                  key={index}
                  className={`w-12 h-12 md:w-16 md:h-16 p-[0.2rem] rounded-full cursor-pointer ${
                    index === avatarSelectIndex &&
                    "border-[0.25rem] border-[#4e0eff]"
                  }`}
                  onClick={(): void => setAvatarSelectIndex(index)}
                />
              ))
            ) : (
              <Button color="gray">
                <Spinner aria-label="Alternate spinner button example" />
                <span className="pl-3">Loading...</span>
              </Button>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              avatarSet();
              setModalToggle(false);
            }}
          >
            Set Avatar
          </Button>
          <Button color="gray" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
