import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogCreateInput } from "../../../inputs/BlogCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBlogArgs {
  @TypeGraphQL.Field(_type => BlogCreateInput, {
    nullable: false
  })
  data!: BlogCreateInput;
}
