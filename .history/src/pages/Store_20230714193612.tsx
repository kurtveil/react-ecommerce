
export default function Store(){
  const { loading, error, data } = useQuery(GET_CLIENTS);
    return (
      <>
      <h1>
        Store
      </h1>
      </>
    )
}
