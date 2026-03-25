import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // Appearance
  background: '#FFF8E7',
  tag: null,         // tag object or null

  // Text content
  recipientName: 'Friend',
  title: 'Thank you!',
  message: 'Write your heartfelt message here...',
  senderName: '',

  // Typography
  font: 'caveat',
  textColor: '#3E2723',
  textAlign: 'left',
  fontSize: 'md',     // 'sm' | 'md' | 'lg'

  // Decorations
  sticker: null,
  hasTape: true,
  shapes: [],  // [{ id, type, x, y, width, height }]

  // Media
  image: null,        // base64 data URL

  // Voice
  voiceUrl: null,
  isRecording: false,
  recordingDuration: 0,

  // UI
  activePanel: 'background',
  isPreviewOpen: false,
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setBackground:        (state, { payload }) => { state.background = payload },
    setTag:               (state, { payload }) => { state.tag = payload },
    setRecipientName:     (state, { payload }) => { state.recipientName = payload },
    setTitle:             (state, { payload }) => { state.title = payload },
    setMessage:           (state, { payload }) => { state.message = payload },
    setSenderName:        (state, { payload }) => { state.senderName = payload },
    setFont:              (state, { payload }) => { state.font = payload },
    setTextColor:         (state, { payload }) => { state.textColor = payload },
    setTextAlign:         (state, { payload }) => { state.textAlign = payload },
    setFontSize:          (state, { payload }) => { state.fontSize = payload },
    setSticker:           (state, { payload }) => { state.sticker = payload },
    toggleTape:           (state)              => { state.hasTape = !state.hasTape },
    addShape:             (state, { payload }) => { state.shapes.push(payload) },
    updateShape:          (state, { payload }) => {
      const shape = state.shapes.find(s => s.id === payload.id)
      if (shape) Object.assign(shape, payload)
    },
    removeShape:          (state, { payload }) => { state.shapes = state.shapes.filter(s => s.id !== payload) },
    setImage:             (state, { payload }) => { state.image = payload },
    setVoiceUrl:          (state, { payload }) => { state.voiceUrl = payload },
    setIsRecording:       (state, { payload }) => { state.isRecording = payload },
    setRecordingDuration: (state, { payload }) => { state.recordingDuration = payload },
    setActivePanel:       (state, { payload }) => { state.activePanel = payload },
    setIsPreviewOpen:     (state, { payload }) => { state.isPreviewOpen = payload },
    resetCard:            ()                   => initialState,
  },
})

export const {
  setBackground, setTag, setRecipientName, setTitle, setMessage, setSenderName,
  setFont, setTextColor, setTextAlign, setFontSize, setSticker, toggleTape,
  addShape, updateShape, removeShape,
  setImage, setVoiceUrl, setIsRecording, setRecordingDuration, setActivePanel,
  setIsPreviewOpen, resetCard,
} = editorSlice.actions

export default editorSlice.reducer
