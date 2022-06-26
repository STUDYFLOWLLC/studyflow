import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateWithoutTermInput } from "../inputs/SchoolCreateWithoutTermInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolCreateOrConnectWithoutTermInput", {
  isAbstract: true
})
export class SchoolCreateOrConnectWithoutTermInput {
  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: false
  })
  where!: SchoolWhereUniqueInput;

  @TypeGraphQL.Field(_type => SchoolCreateWithoutTermInput, {
    nullable: false
  })
  create!: SchoolCreateWithoutTermInput;
}
