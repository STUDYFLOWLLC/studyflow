import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BlogCreateManyInput } from "../../../inputs/BlogCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBlogArgs {
  @TypeGraphQL.Field(_type => [BlogCreateManyInput], {
    nullable: false
  })
  data!: BlogCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
