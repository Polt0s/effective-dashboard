import React from 'react';

import { Button, Modal } from 'shared';

export const Products = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>open Modal</Button>

      <Modal
        isShow={showModal}
        setIsShow={setShowModal}
        hideCloseButton
        title="Заголовок"
        modalFooter
        buttonFooter
        textButtonFooter="Next"
      >
        <p style={{ textAlign: 'justify' }}>
          At vero eos et accusamus et iusto odio dignissimos ducimus, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat? Lorem ipsum dolor sit amet,
          nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat,
          obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
          Lorem ipsum dolor sit amet, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat,
          ut et voluptates repudiandae sint et molestiae non recusandae! At vero eos et accusamus et iusto odio dignissimos ducimus,
          qui blanditiis praesentium voluptatum...
        </p>
      </Modal>
    </>
  );
};
