import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoritos } from "../src/components/Favoritos";

function HomePage() {
    const estilosDaHomePage = { 
        //backgroundColor: "red"
    }
    
    //console.log(config.playlists)
    
    return (
        <>
            <CSSReset></CSSReset>
            <div style = {estilosDaHomePage}>
                <Menu />    
                <Header />
                <Timeline playlists = {config.playlists} />
                <UsuariosFavoritos favoritos = {config.favoritos}/>
                
            </div>
        </>
    );
}
  
export default HomePage
/*
function Menu(){
    return(
        <div>
            Menu
        </div>
    )
}*/

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .user-info img{
        border-radius: 50%;
    }
    .img-capa{
        width: 100%;
        height: auto;
        max-height: 25vw;
        object-fit: cover;
    }
`;

function Header(){
    return(                
        <StyledHeader>
            <img className="img-capa" src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />

            <section className="user-info">    
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>

    )
}

function Timeline(propriedades){
    //console.log("Dentro do componente", propriedades.playlists);
    const playlistsNomes = Object.keys(propriedades.playlists);

    return(
        <StyledTimeline>
            {playlistsNomes.map((playlistsNomes) => {
                const videos = propriedades.playlists[playlistsNomes];
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistsNomes}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>                                    
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
                })
            }
        </StyledTimeline>
    )
}

function UsuariosFavoritos(props){
    const listaFavoritos = Object.keys(props.favoritos);

    return(
        <StyledFavoritos>
            {listaFavoritos.map((listaFavoritos) => {
                const favs = props.favoritos[listaFavoritos];
                console.log(favs)
                return(
                    <section>
                        <h2>{listaFavoritos}</h2>
                        <div>
                            {favs.map((favs) => {
                                return (
                                    <a href={favs.urlUser}>
                                        <img src={favs.imgUser}/>
                                        <span>{favs.nomeUser}</span>
                                    </a>
                                )
                            })}                                
                        </div>
                    </section>
                )
            })}
        </StyledFavoritos>
    )
}

