import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope } from "../inputs/ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope";
import { ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesCreateWithoutFK_ProfessorInput } from "../inputs/ProfessorsOnCoursesCreateWithoutFK_ProfessorInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateNestedManyWithoutFK_ProfessorInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateNestedManyWithoutFK_ProfessorInput {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateWithoutFK_ProfessorInput], {
    nullable: true
  })
  create?: ProfessorsOnCoursesCreateWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput], {
    nullable: true
  })
  connectOrCreate?: ProfessorsOnCoursesCreateOrConnectWithoutFK_ProfessorInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope, {
    nullable: true
  })
  createMany?: ProfessorsOnCoursesCreateManyFK_ProfessorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  connect?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;
}
