import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogUpdateWithoutFK_UserInput } from "../inputs/BlogUpdateWithoutFK_UserInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class BlogUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => BlogWhereUniqueInput, {
    nullable: false
  })
  where!: BlogWhereUniqueInput;

  @TypeGraphQL.Field(_type => BlogUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: BlogUpdateWithoutFK_UserInput;
}
