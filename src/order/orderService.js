const OrderService  = () => {

  // For a given order id fetch all the order details
  const fetchOrderDetails = (dbconnection, orderId)  => {
      const query = "select * from db.orders where order_id="+orderId;
      const order = null;
      try {
          const rows = dbconnection.execute(query);
          
          while (rows.next()) {
              // populate order object
          }
      } catch (e) {
          return null;
      } finally {
          dbconnection.close();
      }

      return order;
  }

  const createOrder = ( dbconnection, email, fromAddress, toAddress, totalPrice, numberOfItemsPerProduct, customerEmail) => {
    const query = "insert into db.orders values ("+fromAddress+","+toAddress+","+totalPrice+","+numberOfItemsPerProduct+","+customerEmail;
    
    numberOfItemsPerProduct.map(() =>{
        // Add to query each product Id
    })
    const orderId = "";
    try {
        const rows = dbconnection.execute(query);
        
        while (rows.next()) {
            // Get order id
        }
    } catch (e) {
        return false;
    } finally {
        dbconnection.close();
    }
    email.SendEmail(fetchOrderDetails(dbconnection,orderId));
    return true;
}

  // Cancel the given order
  const cancelOrder = ( dbconnection, email, orderId) => {
      const query = "update db.orders set status=3 where order_id="+orderId;
      try {
          dbconnection.execute(query);
      } catch (e) {
          return false;
      } finally {
          dbconnection.close();
      }
      email.SendEmail(fetchOrderDetails(dbconnection,orderId));
      return true;
  }
}