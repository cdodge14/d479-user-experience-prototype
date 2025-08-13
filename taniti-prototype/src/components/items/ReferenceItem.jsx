const ReferenceItem = ({ author, date, name, source, url }) => {
  return (
    <li>
        {author}. ({date}). <i>{name}</i>. {source && `${source}.`}
        {url && (
          <>
            <br/>
            <span className="ml-6 block">
              <a href={url} className="text-blue-600 underline">{url}</a>
            </span>
          </>
        )}
    </li>
  );
};

export default ReferenceItem;