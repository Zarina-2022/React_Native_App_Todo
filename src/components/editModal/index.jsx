import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import modalStyles from './style';
import Input from '../input';

const EditModal = ({
  visible,
  closeModal = () => {},
  willEditText,
  setWillEditText,
  onSave = () => {},
  err,
  errMessage
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContentWrapper}>
          <Text style={modalStyles.title}>Update Todo</Text>
          <Input
            value={willEditText}
            onChangeText={updatedText => setWillEditText(updatedText)}
            placeholder="Type the text to update."
            keyboardType="default"
          />
         {
            err &&(
                <Text style={modalStyles.error}>{errMessage}</Text>
            )
         }
          <View style={modalStyles.btn}>
            <TouchableOpacity onPress={onSave} style={modalStyles.saveBtn}>
              <Text style={modalStyles.saveBtnText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={closeModal}
              style={modalStyles.cancelBtn}>
              <Text style={modalStyles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
