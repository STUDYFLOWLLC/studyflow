import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorCreateManyFK_CourseInputEnvelope } from "../inputs/ProfessorCreateManyFK_CourseInputEnvelope";
import { ProfessorCreateOrConnectWithoutFK_CourseInput } from "../inputs/ProfessorCreateOrConnectWithoutFK_CourseInput";
import { ProfessorCreateWithoutFK_CourseInput } from "../inputs/ProfessorCreateWithoutFK_CourseInput";
import { ProfessorWhereUniqueInput } from "../inputs/ProfessorWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorCreateNestedManyWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorCreateNestedManyWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => [ProfessorCreateWithoutFK_CourseInput], {
    nullable: true
  })
  create?: ProfessorCreateWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorCreateOrConnectWithoutFK_CourseInput], {
    nullable: true
  })
  connectOrCreate?: ProfessorCreateOrConnectWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorCreateManyFK_CourseInputEnvelope, {
    nullable: true
  })
  createMany?: ProfessorCreateManyFK_CourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProfessorWhereUniqueInput], {
    nullable: true
  })
  connect?: ProfessorWhereUniqueInput[] | undefined;
}
