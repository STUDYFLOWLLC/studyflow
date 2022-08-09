import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogUpdateManyMutationInput } from "../../../inputs/BlogUpdateManyMutationInput";
import { BlogWhereInput } from "../../../inputs/BlogWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBlogArgs {
  @TypeGraphQL.Field(_type => BlogUpdateManyMutationInput, {
    nullable: false
  })
  data!: BlogUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BlogWhereInput, {
    nullable: true
  })
  where?: BlogWhereInput | undefined;
}
