// utils/messaging.js

export const formatMessageContent = (content) => {
  return content.trim();
};

export const parseAttachments = (attachmentsString) => {
  return attachmentsString.split(",");
};
