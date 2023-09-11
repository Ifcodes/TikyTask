/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskType } from "../utils/types"
import axios from "axios"

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const getTasks = async ( onSuccess: (val: any) => void, onError: (err: any) => void) => {
  try {
    const res = await axios.get(`${baseUrl}`)
    if(res.data){
      onSuccess(res.data)
    }
    return res.data
  } catch (error) {
    if(error){
      onError(error)
    }
  }
}

export const createTask = async (data: TaskType, onSuccess: (val: any) => void, onError: (err: any) => void) => {
  try {
    const res = await axios.post(`${baseUrl}`, data)
    if(res.data){
      onSuccess(res.data)
    }
    return res.data
  } catch (error) {
    if(error){
      onError(error)
    }
  }
}

export const updateTask = async (id: number, data: any, onSuccess: (val: any) => void, onError: (err: any) => void) => {
  try {
    const res = await axios.patch(`${baseUrl}/${id}`, data)
    if(res.data){
      onSuccess(res.data)
    }
    return res.data
  } catch (error) {
    if(error){
      onError(error)
    }
  }
}

export const deleteTask = async (id: number, onSuccess: (val: any) => void, onError: (err: any) => void) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}`)
    if(res.data){
      onSuccess(res.data)
    }
    return res.data
  } catch (error) {
    if(error){
      onError(error)
    }
  }
}