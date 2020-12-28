// import { Card, Row, Col } from 'antd'
// import React from 'react'
// import _ from "lodash"
// import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
// import { useOrderContext } from '../../../context/OrderContext';


// const OrderCard = ({ order }) => {
//     const { addOrder, reduceOrder, deleteOrder, } = useOrderContext()
//     const totalOrder = _.get(order, "totalOrder")
//     const product = _.get(order, "product")
//     const financial = (x) => {
//         return Number.parseFloat(x).toFixed(2);
//     }
//     return (
//         <Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: "0.5rem" }}>
//             <Row gutter={[16, 16]}>
//                 <Col xs={4}>
//                     <img src={product.image} alt="" style={{ width: "100%", objectFit: "contain" }} />
//                 </Col>
//                 <Col xs={4}>
//                     {product.name}
//                 </Col>
//                 <Col xs={4}>
//                     Price: {product.price}
//                 </Col>
//                 <Col xs={4}>
//                     <MinusCircleOutlined onClick={() => reduceOrder(product)} style={{ fontSize: "1.2rem", marginRight: "1.5rem", }} />
//                     <span>Total: </span>
//                     <span>{totalOrder}</span>
//                     <PlusCircleOutlined onClick={() => addOrder(product)} style={{ fontSize: "1.2rem", marginLeft: "1.5rem", }} />
//                 </Col>
//                 <Col xs={4}>
//                     <Row >
//                         <span>Total Price : </span>
//                         <span>{financial(product.price * totalOrder)} </span>
//                     </Row>
//                 </Col>
//                 <Col xs={4}>
//                     <span onClick={() => deleteOrder(product)}>Delete </span>
//                 </Col>
//             </Row>
//         </Card>
//     )
// }

// export default OrderCard
