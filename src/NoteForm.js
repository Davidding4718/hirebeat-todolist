import React, { useState, useEffect } from "react";
import "./NoteForm.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { getUserNotes } from "./graphql/queries";
import { updateTodo } from "./graphql/mutations";

const NoteForm = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState(
      {
        ListDescription: '',
        ListImage: '',
        ListStatus: '',
        ListTitle: '',
      }
    );
    // const [formVisible, setFormVisible] = useState(true);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(formData);

      // 重置 formData 为初始状态
      setFormData({
        ListDescription: '',
        ListImage: '',
        ListStatus: '',
        ListTitle: '',
      });
    };

    const handleCancel = () => {
      setFormData({
        ListDescription: '',
        ListImage: '',
        ListStatus: '',
        ListTitle: '',
      });
      // setFormVisible(false);
      onCancel();
    };
  
    // if (!formVisible) {
    //   return null; // 隐藏表单
    // }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ListDescription">ListDescription:</label>
          <input
            type="text"
            id="ListDescription"
            name="ListDescription"
            value={formData.ListDescription}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ListImage">ListImage:</label>
          <input
            type="text"
            id="ListImage"
            name="ListImage"
            value={formData.ListImage}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ListStatus">ListStatus:</label>
          <input
            type="text"
            id="ListStatus"
            name="ListStatus"
            value={formData.ListStatus}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ListDescription">ListTitle:</label>
          <input
            type="text"
            id="ListTitle"
            name="ListTitle"
            value={formData.ListTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button> {/* 添加取消按钮 */}
      </form>
    );
};

export default NoteForm;