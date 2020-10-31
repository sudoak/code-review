const  EmailService = () => {
  const sendOrderCreatedEmail = (order) => {

  }

  const sendOrderCancelledEmail = (order)  => {
      
  }

  const sendOrderCompletedEmail = (order) => {
      
  }

  const SendEmail = (order) => {
      switch(order.status) {
          case 1:
              sendOrderCreatedEmail(order);
              break;
          case 2:
              sendOrderCancelledEmail(order);
              break;
          case 3:
              sendOrderCompletedEmail(order);
              break;
      }
  }
}
