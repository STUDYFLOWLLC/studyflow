import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogUpdateInput } from "../../../inputs/BlogUpdateInput";
import { BlogWhereUniqueInput } from "../../../inputs/BlogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBlogArgs {
  @TypeGraphQL.Field(_type => BlogUpdateInput, {
    nullable: false
  })
  data!: BlogUpdateInput;

  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;
}
