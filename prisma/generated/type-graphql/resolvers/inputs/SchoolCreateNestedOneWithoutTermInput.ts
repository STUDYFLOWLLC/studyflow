import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateOrConnectWithoutTermInput } from "../inputs/SchoolCreateOrConnectWithoutTermInput";
import { SchoolCreateWithoutTermInput } from "../inputs/SchoolCreateWithoutTermInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolCreateNestedOneWithoutTermInput", {
  isAbstract: true
})
export class SchoolCreateNestedOneWithoutTermInput {
  @TypeGraphQL.Field(_type => SchoolCreateWithoutTermInput, {
    nullable: true
  })
  create?: SchoolCreateWithoutTermInput | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateOrConnectWithoutTermInput, {
    nullable: true
  })
  connectOrCreate?: SchoolCreateOrConnectWithoutTermInput | undefined;

  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: true
  })
  connect?: SchoolWhereUniqueInput | undefined;
}
