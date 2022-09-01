// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="user-list">
      <div className="top-list">
        <h1 className="title-head">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="line" />
    </li>
  )
}
export default BlogItem
