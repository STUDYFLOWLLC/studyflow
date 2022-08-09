import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateWithoutFK_UserInput } from "../inputs/BlogCreateWithoutFK_UserInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class BlogCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: BlogCreateWithoutFK_UserInput;
}
