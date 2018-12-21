$(document).ready(function () {
  $('#contacts-main__form').validate({
    rules: {
      Mail: {
        required: true,
        email: true
      },
      Message: {
        required: true
      }
    },
    messages: {
      Mail: {
        required: 'Please enter your E-Mail',
        email: 'Please enter valid E-Mail address'
      },
      Message: 'Please write a message'
    }
  });

  $('#subscribe-form').validate({
    rules: {
      Mail: {
        required: true,
        email: true
      }
    },
    messages: {
      Mail: {
        required: 'Please enter your E-Mail',
        email: 'Please enter valid E-Mail address'
      }
    }
  });
});