import React from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions
} from '@material-ui/core';

export default class AlertDialog extends React.Component {
  static instance;

  static alert(title = '', content = '') {
    if (AlertDialog.instance) AlertDialog.instance.open(title, content);
  }

  constructor(props) {
    super(props);

    AlertDialog.instance = this;
  }

  state = {
    content: '',
    open: false,
    title: ''
  };

  open(title, content) {
    this.setState({ open: true, title, content });
  }

  render() {
    const { content, open, title } = this.state;
    const setClose = () => this.setState({ open: false });

    return (
      <Dialog
        fullWidth
        open={open}
        onClose={setClose}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        {content && (
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={setClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
