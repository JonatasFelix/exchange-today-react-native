import React from "react";
import AwesomeAlert from 'react-native-awesome-alerts';
import { styles } from "./styles";

interface Props {
    showProgress?: boolean;
    title: string;
    message: string;
    closeOnTouchOutside?: boolean;
    closeOnHardwareBackPress?: boolean;
    showConfirmButton?: boolean;
    confirmText?: string;
    confirmButtonColor?: string;
    showAlert: boolean;
    setShowAlert: (value: boolean) => void;
}

const CustomAlert = (props: Props) => {

    return (
        <AwesomeAlert

            // MOSTRA O ALERT
            show={props.showAlert}

            // MOSTRA O PROGRESSO - DEFAULT FALSE
            showProgress={props.showProgress ? props.showProgress : false}

            // TITULO - OBRIGATORIO
            title={props.title} 

            // MENSAGEM - OBRIGATORIO
            message={props.message}

            // FECHA AO CLICAR FORA - DEFAULT TRUE
            closeOnTouchOutside={props.closeOnTouchOutside ? props.closeOnTouchOutside : true}

            // FECHA AO CLICAR NO BOTAO VOLTAR DO ANDROID - DEFAULT FALSE
            closeOnHardwareBackPress={props.closeOnHardwareBackPress ? props.closeOnHardwareBackPress : false}

            // MOSTRA O BOTAO CONFIRMAR - DEFAULT TRUE
            showConfirmButton={props.showConfirmButton ? props.showConfirmButton : true}

            // TEXTO DO BOTAO CONFIRMAR - DEFAULT OK
            confirmText={props.confirmText ? props.confirmText : "OK"}

            // COR DO BOTAO CONFIRMAR - DEFAULT #BB84E8
            confirmButtonColor={props.confirmButtonColor ? props.confirmButtonColor : "#BB84E8"}

            // FUNCAO AO CLICAR NO BOTAO CONFIRMAR
            onConfirmPressed={() => props.setShowAlert(false)}


            // ESTILOS

            //  ESTILO DO ALERT
            contentContainerStyle={styles.contentContainerStyle}

            // ESTILO DO TITULO
            titleStyle={styles.titleStyle}

            // ESTILO DA MENSAGEM
            messageStyle={styles.messageStyle}

            // ESTILO DO BOTAO CONFIRMAR
            confirmButtonStyle={styles.confirmButtonStyle}
        />
    );
}

export default CustomAlert;