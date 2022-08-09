import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogOrderByWithRelationInput } from "../../../inputs/BlogOrderByWithRelationInput";
import { BlogWhereInput } from "../../../inputs/BlogWhereInput";
import { BlogWhereUniqueInput } from "../../../inputs/BlogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBlogArgs {
  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BlogOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BlogOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: true
  })
  cursor?: BlogWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
