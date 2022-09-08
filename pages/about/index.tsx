import { NextPage } from "next";


const About: NextPage = () => {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems: 'center',
            width: '100%',
            
        }}>
            <div style={{
                width: '70%',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column'
            }}>
            <h1 style={{fontSize: '28pt'}}>Sobre mim</h1>
            <p style={{fontSize:'18pt'}}>
            Em contato com programação desde 2019 quando iniciei o curso técnico integrado ao ensino médio no IFMT, desenvolvendo aplicativos e sites com o intuito de aprender, me preocupando sempre com a qualidade do código e com a experiência do usuário.<br></br>
<br></br>
            Tenho experiências pessoais com Python ( Machine Learning ), Java ( Linguagem na qual eu aprendi programação ), Flutter ( Desenvolvi diversos aplicativos híbridos e possuo projetos em andamento ), Android Nativo ( Criação de alguns aplicativos nativos ), HTML, CSS, JavaScript, React ( Utilizei juntamente com NextJS para criação de um projeto de blog pessoal, no qual sou responsável por todo o ciclo de vida do aplicativo, desde o design até a manutenção e atualização).
            <br></br><br></br>
            Atualmente estudando React e Flutter. Tenho o objetivo de conquistar meu primeiro emprego e evoluir com a empresa, sempre estudando mais a cada dia para dar o meu melhor e construir uma carreira sólida e de sucesso.
            </p>
            </div>

            <button style={{
                width:'150px',
                height:'50px',
                backgroundColor:'white',
                color:'black',
                border:'1px solid #107fd2',
                borderRadius:'10px'
            }}>Voltar</button>
        </main>
    )
}


export default About