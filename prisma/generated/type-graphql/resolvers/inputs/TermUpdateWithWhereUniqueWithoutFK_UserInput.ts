import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermUpdateWithoutFK_UserInput } from "../inputs/TermUpdateWithoutFK_UserInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class TermUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;

  @TypeGraphQL.Field(_type => TermUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: TermUpdateWithoutFK_UserInput;
}
