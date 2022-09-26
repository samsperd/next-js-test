import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem';

const AriticleList = ({ articles }) => {
    return ( 
        <div className={articleStyles.grid}>
            {
                articles.map((article, i) => (
                    <ArticleItem key={i} article={article}></ArticleItem>
                ))

            }
        </div>
     );
}
 
export default AriticleList;