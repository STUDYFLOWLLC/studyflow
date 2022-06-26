import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateWithoutFK_UserInput } from "../inputs/TermCreateWithoutFK_UserInput";
import { TermUpdateWithoutFK_UserInput } from "../inputs/TermUpdateWithoutFK_UserInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class TermUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;

  @TypeGraphQL.Field(_type => TermUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: TermUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => TermCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: TermCreateWithoutFK_UserInput;
}
