import { Input as NaviteBaseInput, IInputProps } from 'native-base'

export function Input({...rest}: IInputProps){
  return (
    <NaviteBaseInput 
      bg="gray.700" 
      h={14} 
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300" 
      {...rest}
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700"
      }}
    />
  )
}