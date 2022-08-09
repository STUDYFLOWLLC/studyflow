import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogCreateInput } from "../../../inputs/BlogCreateInput";
import { BlogUpdateInput } from "../../../inputs/BlogUpdateInput";
import { BlogWhereUniqueInput } from "../../../inputs/BlogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBlogArgs {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogCreateInput, {
    nullable: false
  })
  create!: BlogCreateInput;

  @TypeGraphQL.Field(_type => BlogUpdateInput, {
    nullable: false
  })
  update!: BlogUpdateInput;
}
