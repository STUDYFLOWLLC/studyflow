import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateOrConnectWithoutFK_CourseInput } from "../inputs/SchoolCreateOrConnectWithoutFK_CourseInput";
import { SchoolCreateWithoutFK_CourseInput } from "../inputs/SchoolCreateWithoutFK_CourseInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolCreateNestedOneWithoutFK_CourseInput", {
  isAbstract: true
})
export class SchoolCreateNestedOneWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_CourseInput, {
    nullable: true
  })
  create?: SchoolCreateWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateOrConnectWithoutFK_CourseInput, {
    nullable: true
  })
  connectOrCreate?: SchoolCreateOrConnectWithoutFK_CourseInput | undefined;

  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: true
  })
  connect?: SchoolWhereUniqueInput | undefined;
}
