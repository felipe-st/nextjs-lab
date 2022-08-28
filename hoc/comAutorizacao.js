import { useRouter } from "next/router";

export default function comAutorizacao(Componente) {
    const estaLogado = true;
    
    //objeto do Next que permite realizar manipulaçao das rotas:

    return (props) => {
        if (typeof window === 'undefined'){
            return null;
        }

        const router = useRouter();
        if (estaLogado){
            return <Componente {...props} />
        }

    //se não estiver logado, o router irá forçar o direcionamento para a página de login:
        router.push('/login');
        return null;
    }
}