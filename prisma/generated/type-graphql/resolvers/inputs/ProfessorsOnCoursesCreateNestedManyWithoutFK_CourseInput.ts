import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope } from "../inputs/ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope";
import { ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput";
import { ProfessorsOnCoursesCreateWithoutFK_CourseInput } from "../inputs/ProfessorsOnCoursesCreateWithoutFK_CourseInput";
import { ProfessorsOnCoursesWhereUniqueInput } from "../inputs/ProfessorsOnCoursesWhereUniqueInput";

@TypeGraphQL.InputType("ProfessorsOnCoursesCreateNestedManyWithoutFK_CourseInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesCreateNestedManyWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateWithoutFK_CourseInput], {
    nullable: true
  })
  create?: ProfessorsOnCoursesCreateWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput], {
    nullable: true
  })
  connectOrCreate?: ProfessorsOnCoursesCreateOrConnectWithoutFK_CourseInput[] | undefined;

  @TypeGraphQL.Field(_type => ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope, {
    nullable: true
  })
  createMany?: ProfessorsOnCoursesCreateManyFK_CourseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesWhereUniqueInput], {
    nullable: true
  })
  connect?: ProfessorsOnCoursesWhereUniqueInput[] | undefined;
}
