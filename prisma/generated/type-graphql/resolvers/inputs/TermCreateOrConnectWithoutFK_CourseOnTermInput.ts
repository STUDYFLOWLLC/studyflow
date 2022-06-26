import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateWithoutFK_CourseOnTermInput } from "../inputs/TermCreateWithoutFK_CourseOnTermInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermCreateOrConnectWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TermCreateOrConnectWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: false
  })
  where!: TermWhereUniqueInput;

  @TypeGraphQL.Field(_type => TermCreateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  create!: TermCreateWithoutFK_CourseOnTermInput;
}
