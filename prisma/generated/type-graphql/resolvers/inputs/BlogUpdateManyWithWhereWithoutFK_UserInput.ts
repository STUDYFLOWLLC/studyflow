import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogScalarWhereInput } from "../inputs/BlogScalarWhereInput";
import { BlogUpdateManyMutationInput } from "../inputs/BlogUpdateManyMutationInput";

@TypeGraphQL.InputType("BlogUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class BlogUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => BlogScalarWhereInput, {
    nullable: false
  })
  where!: BlogScalarWhereInput;

  @TypeGraphQL.Field(_type => BlogUpdateManyMutationInput, {
    nullable: false
  })
  data!: BlogUpdateManyMutationInput;
}
