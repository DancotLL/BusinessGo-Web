import { useSelector } from 'react-redux';

export const Tags = () => {
  const project = useSelector(store => store.project);

  const hashtags = project?.configuration.basic_info.hashtags || [];

  return (
    <div className="tags">
      {hashtags.map((hashtag, i) => (
        <a key={i} href={`https://twitter.com/hashtag/${encodeURIComponent(hashtag.value)}`} target="blank">
          <h4>#{hashtag.value}</h4>
        </a>
      ))}
      <style jsx>
        {`
          .tags {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            background: #ebebeb;
            padding: 1em;
            margin-bottom: 4em;
          }
          h4 {
            width: 100%;
            margin: 0 9px;
            color: #1a508b;
          }
        `}
      </style>
    </div>
  );
};
