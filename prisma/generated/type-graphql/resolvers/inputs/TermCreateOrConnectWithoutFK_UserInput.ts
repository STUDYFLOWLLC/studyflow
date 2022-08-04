import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateWithoutFK_UserInput } from "../inputs/TermCreateWithoutFK_UserInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class TermCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;

  @TypeGraphQL.Field(_type => TermCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: TermCreateWithoutFK_UserInput;
}
