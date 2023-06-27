function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.user.userImage} />
                    {props.user.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likes.likesImage} />
                    <div class="texto">
                        Curtido por <strong>{props.likes.likeName}</strong> e <strong>outras {props.likes.likeQuant} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Posts() {
    const postsArray = [
        {user:{userImage:"assets/img/meowed.svg", userName:"meowed"}, postImage:"assets/img/gato-telefone.svg", likes:{likesImage:"assets/img/respondeai.svg", likeName:"respondeai", likeQuant:"101.523"}},
        {user:{userImage:"assets/img/barked.svg", userName:"barked"}, postImage:"assets/img/dog.svg", likes:{likesImage:"assets/img/adorable_animals.svg", likeName:"adorable_animals", likeQuant:"99.159"}}
    ];
    
    return (
        <div class="posts">

            {postsArray.map(post => <Post user={post.user} postImage={post.postImage} likes={post.likes} />)}

        </div>
    );
}