import React, { useImperativeHandle, useState } from 'react'
import { Modal, Row, Button } from 'antd'
import { useCartContext } from '../../context/CartContex';

const Delete = (props, ref) => {
    const { deleteItem } = useCartContext()
    const [visible, setvisible] = useState(false)
    const [item, setItem] = useState()

    useImperativeHandle(ref, () => {
        return {
            showModal: (_item) => {
                setvisible(true)
                setItem(_item)

            }
        }
    }, [])

    const _deleteItem = () => {
        deleteItem(item)
        setvisible(false)
    }
    if (!item) {
        return null
    }
    return (
        <Modal
            visible={visible}
            destroyOnClose={true}
            onCancel={() => setvisible(false)}
            footer={null}
            closable={false}
        >
            <h2>Are you sure delete this item</h2>
            <Row justify="end">
                <Button danger onClick={_deleteItem}>DELETE</Button>
                <Button style={{ marginLeft: "1rem" }} onClick={() => setvisible(false)}>CANCEL</Button>
            </Row>
        </Modal>
    )
}

export default React.forwardRef(Delete)
